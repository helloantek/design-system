// Raw get_design_context output for node 28:23315 (Variant=Icon only, Style=Primary, State=Default, Size=md, Shape=Rounded).
// Verbatim, except: assetPathPrefix points at local copies of the exported SVGs, and an export line was added.
const assetPathPrefix = "/assets";
const imgLeadIcon = `${assetPathPrefix}/96b7d.svg`;

type ButtonProps = {
  className?: string;
  leadIcon1?: React.ReactNode | null;
  shape?: "Rounded";
  size?: "md";
  state?: "Default";
  style?: "Primary";
  variant?: "Icon only";
};

function Button({ className, leadIcon1 = null, shape = "Rounded", size = "md", state = "Default", style = "Primary", variant = "Icon only" }: ButtonProps) {
  return (
    <div className={className || "content-stretch flex gap-[var(--none,0px)] items-center justify-center min-h-[36px] min-w-[36px] overflow-clip p-[var(--none,0px)] relative rounded-[var(--xs,4px)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"} data-node-id="28:23315">
      <div aria-hidden className="absolute bg-[var(--bg\/state\/primary,#111115)] inset-0 pointer-events-none rounded-[var(--xs,4px)]" />
      {leadIcon1 || (
        <div className="relative shrink-0 size-[20px]" data-node-id="28:23316" data-name="lead-icon">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeadIcon} />
        </div>
      )}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

export default Button;
