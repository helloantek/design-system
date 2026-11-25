import { ChangeDetectionStrategy, Component, InjectionToken, type Signal, booleanAttribute, computed, contentChild, contentChildren, forwardRef, inject, input, signal } from '@angular/core';
import { DsIcon } from '../slots/slots';

// Styles live in @helloantek/ds-css (classes ds-avatar*); these components only render the markup, as ds-react's
// Avatar and AvatarGroup do.

/** Figma "size": xs 20, sm 24, default 32, lg 40, xl 48 px. */
export type AvatarSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl';
/** Figma "shape". */
export type AvatarShape = 'round' | 'square';

const DS_AVATAR_GROUP = new InjectionToken<{ size: Signal<AvatarSize> }>('DS_AVATAR_GROUP');

/**
 * Figma "Avatar" on a native `<span>`. Its variant follows the content: `src` → image, `initials` → fallback, neither
 * → icon (a person, or an icon marked `dsIcon`); a picture that fails to load falls back.
 *
 *     <span dsAvatar src="/sam.jpg" name="Sam Rivera"></span>
 *     <span dsAvatar initials="SH" size="sm"></span>
 *
 * `name` is the accessible name; without it the avatar is decorative.
 */
@Component({
  selector: 'span[dsAvatar]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.role]': '!picture() && name() ? "img" : null',
    '[attr.aria-label]': '!picture() && name() ? name() : null',
    '[attr.src]': 'null',
    '[attr.initials]': 'null',
    '[attr.name]': 'null',
    '[attr.size]': 'null',
    '[attr.shape]': 'null',
    '[attr.ring]': 'null',
  },
  template: `
    <span class="ds-avatar__image">
      @if (picture()) {
        <img [src]="src()" [alt]="name() ?? ''" (error)="failed.set(src())" />
      } @else if (initials()) {
        <span class="ds-avatar__initials" aria-hidden="true">{{ initials() }}</span>
      } @else {
        <span class="ds-avatar__icon" aria-hidden="true">
          @if (icon()) {
            <ng-content select="[dsIcon]" />
          } @else {
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
          }
        </span>
      }
    </span>
  `,
})
export class DsAvatar {
  /** Figma variant=image: the picture's URL. */
  readonly src = input<string>();
  /** Figma variant=fallback ("Initials"), e.g. "SH". */
  readonly initials = input<string>();
  /** Who the avatar shows; the accessible name of the picture or initials. */
  readonly name = input<string>();
  readonly size = input<AvatarSize>('default');
  readonly shape = input<AvatarShape>('round');
  /** A 2 px ring in the page colour, as Avatar Group draws it. */
  readonly ring = input(false, { transform: booleanAttribute });

  private readonly group = inject(DS_AVATAR_GROUP, { optional: true });
  protected readonly icon = contentChild(DsIcon);
  protected readonly failed = signal<string | undefined>(undefined);
  protected readonly picture = computed(() => !!this.src() && this.failed() !== this.src());
  protected readonly classes = computed(() =>
    [
      'ds-avatar',
      `ds-avatar--${this.group ? this.group.size() : this.size()}`,
      `ds-avatar--${this.shape()}`,
      !this.picture() && this.initials() && 'ds-avatar--fallback',
      (this.group || this.ring()) && 'ds-avatar--ring',
    ]
      .filter(Boolean)
      .join(' '),
  );
}

/**
 * Figma "Avatar Group" on a native `<span>`: overlapping avatars, each with the group's size and the ring, and an
 * optional "+N" count when `total` is more than the avatars given.
 *
 *     <span dsAvatarGroup size="sm" [total]="12" aria-label="Reviewers"><span dsAvatar …></span>…</span>
 */
@Component({
  selector: 'span[dsAvatarGroup]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DS_AVATAR_GROUP, useExisting: forwardRef(() => DsAvatarGroup) }],
  host: {
    role: 'group',
    class: 'ds-avatar-group',
    '[attr.size]': 'null',
    '[attr.total]': 'null',
  },
  template: `
    <ng-content />
    @if (hidden() > 0) {
      <span [class]="'ds-avatar-group__count ds-avatar--' + size()" role="img" [attr.aria-label]="'and ' + hidden() + ' more'"><span aria-hidden="true">+{{ hidden() }}</span></span>
    }
  `,
})
export class DsAvatarGroup {
  /** Figma "Size". */
  readonly size = input<AvatarSize>('default');
  /** Total number of people when there are more than the avatars given; the count shows the difference. */
  readonly total = input<number>();

  private readonly avatars = contentChildren(DsAvatar);
  protected readonly hidden = computed(() => (this.total() ?? this.avatars().length) - this.avatars().length);
}
