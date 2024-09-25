import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const cardDescriptionVariants = cva("my-0", {
  variants: {
    size: {
      default: "text-[32px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface CardDescriptionProps
  extends React.ComponentPropsWithoutRef<"p">,
    VariantProps<typeof cardDescriptionVariants> {}

const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  tw,
  ...props
}) => {
  return (
    <p tw={cn(cardDescriptionVariants({ className: tw }))} {...props}>
      {children}
    </p>
  );
};

export { CardDescription };
export type { CardDescriptionProps };