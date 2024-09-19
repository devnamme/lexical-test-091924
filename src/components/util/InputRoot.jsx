export const InputRoot = ({
  name,
  label,
  form,
  required,
  disabled = false,
  className = '',
  children,
  onClick = () => {},
}) => {
  return (
    <div
      className={`grid gap-y-1 ${className}`}
      onClick={onClick}
    >
      {label && (
        <label
          htmlFor={name}
          className={`font-medium ${disabled ? 'text-grey-99' : ''}`}
          onClick={onClick}
        >
          <span>
            {label}
            {required && <span className="text-red-700"> *</span>}
          </span>
        </label>
      )}

      <div className="relative w-full">{children}</div>

      {form.formState.errors[name] && (
        <span className="ml-3 font-medium text-red-700">{form.formState.errors[name].message}</span>
      )}
    </div>
  );
};

export const InputFieldContainer = ({ disabled = false, children }) => {
  return (
    <div
      className={`relative inline-flex h-full w-full items-center justify-between overflow-clip rounded-lg border ${
        disabled ? 'border-grey-dd bg-grey-dd' : 'border-grey-88 bg-wht'
      }`}
    >
      {children}
    </div>
  );
};

export const InputDropdownContainer = ({ children }) => {
  return (
    <div className="custom-scrollbar absolute z-10 mt-1 grid max-h-60 w-full grid-cols-1 divide-y divide-grey-88 overflow-clip rounded-lg border border-grey-88 bg-wht shadow-lg">
      {children}
    </div>
  );
};
