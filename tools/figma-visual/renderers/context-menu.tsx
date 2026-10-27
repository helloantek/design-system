import { DropdownMenuContent, DropdownMenuIconItem, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRow, DropdownMenuSeparator } from '@helloantek/ds-react';
import { icons } from '../../../packages/react/src/ContextMenu/ContextMenu.fixtures';
import type { Renderer } from './types';

// The Sort UI 2.0 Context Menu demos "Photo" and "Chat message", with the Figma file's texts and icons. ContextMenu
// opens on a right-click at the pointer, so the menu it shows is rendered here as the same DropdownMenuContent
// (224 px), open. The Photo demo highlights Favorite (Figma State=Focus), drawn with data-highlighted.

const reactions = [
  ['🙂', 'Smile'],
  ['😴', 'Sleepy'],
  ['🫢', 'Surprised'],
  ['😮‍💨', 'Phew'],
  ['🫠', 'Melting'],
];

export const renderContextMenu: Renderer = (p) => (
  <div id="target" style={{ width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
    {p.Demo === 'Photo' ? (
      <DropdownMenuContent aria-label="Photo" style={{ width: 224 }}>
        <DropdownMenuLabel>IMG_2041.HEIC</DropdownMenuLabel>
        <DropdownMenuItem icon={icons.copy} shortcut="⌘C">
          Copy image
        </DropdownMenuItem>
        <DropdownMenuItem icon={icons.download} shortcut="⇧⌘E">
          Export…
        </DropdownMenuItem>
        <DropdownMenuItem icon={icons.share}>Share…</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={icons.heart} shortcut="." data-highlighted="">
          Favorite
        </DropdownMenuItem>
        <DropdownMenuItem icon={icons.rotate} shortcut="⌘R">
          Rotate
        </DropdownMenuItem>
        <DropdownMenuItem icon={icons.image}>Set as wallpaper</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={icons.eyeOff} shortcut="⌘L">
          Hide photo
        </DropdownMenuItem>
        <DropdownMenuItem type="destructive" icon={icons.trash} shortcut="⌘⌫">
          Delete photo
        </DropdownMenuItem>
      </DropdownMenuContent>
    ) : p.Demo === 'Chat message' ? (
      <DropdownMenuContent aria-label="Message" style={{ width: 224 }}>
        <DropdownMenuRow aria-label="Reactions">
          {reactions.map(([emoji, label]) => (
            <DropdownMenuIconItem key={label} aria-label={label}>
              {emoji}
            </DropdownMenuIconItem>
          ))}
          <DropdownMenuIconItem aria-label="Add reaction">{icons.smilePlus}</DropdownMenuIconItem>
        </DropdownMenuRow>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={icons.reply} shortcut="R">
          Reply
        </DropdownMenuItem>
        <DropdownMenuItem icon={icons.forward}>Forward</DropdownMenuItem>
        <DropdownMenuItem icon={icons.copy} shortcut="⌘C">
          Copy text
        </DropdownMenuItem>
        <DropdownMenuItem icon={icons.pin}>Pin to chat</DropdownMenuItem>
        <DropdownMenuItem icon={icons.mail} shortcut="U">
          Mark as unread
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={icons.pencil} shortcut="E">
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem type="destructive" icon={icons.trash} shortcut="⌫">
          Delete message
        </DropdownMenuItem>
      </DropdownMenuContent>
    ) : (
      (() => {
        throw new Error(`Context Menu demo "${p.Demo}" is not implemented`);
      })()
    )}
  </div>
);
