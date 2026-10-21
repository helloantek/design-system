// Raw get_design_context output for node 2097:2869 (Variant=Default, Style=Primary, State=Loading, Size=md, Shape=Rounded).
// Verbatim, except: assetPathPrefix points at local copies of the exported SVGs, and an export line was added.
const assetPathPrefix = "/assets";
const imgLeadIcon = `${assetPathPrefix}/00a5c.svg`;

type ButtonProps = {
  className?: string;
  label?: string;
  shape?: "Rounded";
  size?: "md";
  state?: "Loading";
  style?: "Primary";
  variant?: "Default";
};

function Button({ className, label = "Button", shape = "Rounded", size = "md", state = "Loading", style = "Primary", variant = "Default" }: ButtonProps) {
  return (
    <div className={className || "content-stretch flex gap-[var(--6,6px)] items-center justify-center overflow-clip px-[var(--12,12px)] py-[var(--8,8px)] relative rounded-[var(--xs,4px)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[143px]"} data-node-id="2097:2869">
      <div aria-hidden className="absolute bg-[var(--bg\/state\/primary-loading,#36363a)] inset-0 pointer-events-none rounded-[var(--xs,4px)]" />
      <div className="relative shrink-0 size-[16px]" data-node-id="2097:2870" data-name="lead-icon">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeadIcon} />
      </div>
      <div className="content-stretch flex gap-[var(--none,0px)] items-center justify-center px-[var(--2,2px)] py-[var(--none,0px)] relative shrink-0" data-node-id="2097:2871" data-name="Label">
        <p className="[word-break:break-word] font-[family-name:var(--body,'Inter:Medium')] font-[var(--weight\/medium,500)] leading-[var(--line-height\/leading-5,20px)] not-italic relative shrink-0 text-[color:var(--text\/white-default,white)] text-[length:var(--size\/sm,14px)] whitespace-nowrap" data-node-id="2097:2872">
          {label}
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

export default Button;
