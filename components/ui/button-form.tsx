import { forwardRef } from "react";
import { Button, ButtonProps } from "./Button";
import LoadIcon from "@component/icons/Load";

type ButtonFormProps = ButtonProps & {
  isLoading?: boolean;
};

const ButtonForm = forwardRef<HTMLButtonElement, ButtonFormProps>(
  ({ children, isLoading, ...props }, ref) => {
    return (
      <Button ref={ref} {...props}>
        <>
          {isLoading && (
            <span className="absolute inset-0 z-10 flex items-center justify-center bg-orange-dark">
              <LoadIcon />
            </span>
          )}
          {children}
        </>
      </Button>
    );
  },
);

ButtonForm.displayName = "ButtonForm";

export { ButtonForm };
