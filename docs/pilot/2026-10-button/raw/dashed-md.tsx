// Raw get_design_context output for node 28:22005 (Variant=Default, Style=Dashed, State=Default, Size=md, Shape=Rounded).
// Verbatim, except: assetPathPrefix points at local copies of the exported SVGs, and an export line was added.
const assetPathPrefix = "/assets";
const imgLeadIcon = `${assetPathPrefix}/ee040.svg`;
const imgTailIcon = `${assetPathPrefix}/2defa.svg`;

type ButtonProps = {
  className?: string;
  badge?: boolean;
  badge1?: string;
  label?: string;
  leadIcon?: boolean;
  leadIcon1?: React.ReactNode | null;
  shape?: "Rounded";
  size?: "md";
  state?: "Default";
  style?: "Dashed";
  tailIcon?: boolean;
  tailIcon1?: React.ReactNode | null;
  variant?: "Default";
};

function Button({ className, badge = true, badge1 = "/", label = "Button", leadIcon = true, leadIcon1 = null, shape = "Rounded", size = "md", state = "Default", style = "Dashed", tailIcon = true, tailIcon1 = null, variant = "Default" }: ButtonProps) {
  return (
    <div className={className || "bg-[var(--bg\\/state\\/secondary,white)] border-[length:var(--default,1px)] border-[var(--border\\/darker,rgba(39,39,42,0.15))] border-dashed content-stretch flex gap-[var(--6,6px)] items-center justify-center overflow-clip px-[var(--12,12px)] py-[var(--8,8px)] relative rounded-[var(--xs,4px)]"} data-node-id="28:22005">
      {leadIcon &&
        (leadIcon1 || (
          <div className="relative shrink-0 size-[16px]" data-node-id="28:20640" data-name="lead-icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeadIcon} />
          </div>
        ))}
      <div className="content-stretch flex gap-[var(--none,0px)] items-center justify-center px-[var(--2,2px)] py-[var(--none,0px)] relative shrink-0" data-node-id="28:20641" data-name="Label">
        <p className="[word-break:break-word] font-[family-name:var(--body,'Inter:Medium')] font-[var(--weight\/medium,500)] leading-[var(--line-height\/leading-5,20px)] not-italic relative shrink-0 text-[color:var(--text\/default,#111115)] text-[length:var(--size\/sm,14px)] whitespace-nowrap" data-node-id="28:20642">
          {label}
        </p>
      </div>
      {badge && (
        <div className="border-[length:var(--default,1px)] border-[var(--border\/default,rgba(39,39,42,0.1))] border-solid content-stretch flex gap-[var(--none,0px)] h-[20px] items-center justify-center min-w-[20px] px-[var(--4,4px)] py-[var(--none,0px)] relative rounded-[var(--xs,4px)] shrink-0" data-node-id="28:20643" data-name="badge">
          <p className="[word-break:break-word] font-[family-name:var(--body,'Inter:Medium')] font-[var(--weight\/medium,500)] leading-[var(--line-height\/leading-4,16px)] not-italic relative shrink-0 text-[color:var(--text\/muted,#6f6f77)] text-[length:var(--size\/xs,12px)] whitespace-nowrap" data-node-id="28:20644">
            {badge1}
          </p>
        </div>
      )}
      {tailIcon &&
        (tailIcon1 || (
          <div className="relative shrink-0 size-[16px]" data-node-id="28:20645" data-name="tail-icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTailIcon} />
          </div>
        ))}
    </div>
  );
}

export default Button;
