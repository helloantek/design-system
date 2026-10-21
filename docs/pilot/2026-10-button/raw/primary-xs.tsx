// Raw get_design_context output for node 2006:1130 (Variant=Default, Style=Primary, State=Default, Size=xs, Shape=Rounded).
// Verbatim, except: assetPathPrefix points at local copies of the exported SVGs, and an export line was added.
const assetPathPrefix = "/assets";
const imgLeadIcon = `${assetPathPrefix}/5835e.svg`;
const imgTailIcon = `${assetPathPrefix}/30df3.svg`;

type ButtonProps = {
  className?: string;
  badge?: boolean;
  badge1?: string;
  label?: string;
  leadIcon?: boolean;
  leadIcon1?: React.ReactNode | null;
  shape?: "Rounded";
  size?: "xs";
  state?: "Default";
  style?: "Primary";
  tailIcon?: boolean;
  tailIcon1?: React.ReactNode | null;
  variant?: "Default";
};

function Button({ className, badge = true, badge1 = "/", label = "Button", leadIcon = true, leadIcon1 = null, shape = "Rounded", size = "xs", state = "Default", style = "Primary", tailIcon = true, tailIcon1 = null, variant = "Default" }: ButtonProps) {
  return (
    <div className={className || "content-stretch flex gap-[var(--4,4px)] items-center justify-center overflow-clip px-[var(--8,8px)] py-[var(--4,4px)] relative rounded-[var(--xs,4px)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"} data-node-id="2006:1130">
      <div aria-hidden className="absolute bg-[var(--bg\/state\/primary,#111115)] inset-0 pointer-events-none rounded-[var(--xs,4px)]" />
      {leadIcon &&
        (leadIcon1 || (
          <div className="relative shrink-0 size-[16px]" data-node-id="2006:1131" data-name="lead-icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeadIcon} />
          </div>
        ))}
      <div className="content-stretch flex gap-[var(--none,0px)] items-center justify-center px-[var(--2,2px)] py-[var(--none,0px)] relative shrink-0" data-node-id="2006:1132" data-name="Label">
        <p className="[word-break:break-word] font-[family-name:var(--body,'Inter:Medium')] font-[var(--weight\/medium,500)] leading-[var(--line-height\/leading-5,20px)] not-italic relative shrink-0 text-[color:var(--text\/white-default,white)] text-[length:var(--size\/sm,14px)] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.15)] whitespace-nowrap" data-node-id="2006:1133">
          {label}
        </p>
      </div>
      {badge && (
        <div className="bg-[var(--bg\/badge\/white,rgba(255,255,255,0.1))] border-[length:var(--default,1px)] border-[var(--border\/white,rgba(255,255,255,0.2))] border-solid content-stretch flex gap-[var(--none,0px)] h-[16px] items-center justify-center min-w-[16px] px-[var(--4,4px)] py-[var(--none,0px)] relative rounded-[var(--xs,4px)] shrink-0" data-node-id="2006:1134" data-name="badge">
          <p className="[word-break:break-word] font-[family-name:var(--body,'Inter:Medium')] font-[var(--weight\/medium,500)] leading-[var(--line-height\/leading-4,16px)] not-italic relative shrink-0 text-[color:var(--text\/white-default,white)] text-[length:var(--size\/xs,12px)] whitespace-nowrap" data-node-id="2006:1135">
            {badge1}
          </p>
        </div>
      )}
      {tailIcon &&
        (tailIcon1 || (
          <div className="relative shrink-0 size-[16px]" data-node-id="2006:1136" data-name="tail-icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTailIcon} />
          </div>
        ))}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

export default Button;
