// H1
const H1 = ({ className = '', children }) => (
  <h1 className={`text-black font-sharp text-xl font-bold ${className}`}>{children}</h1>
);

// H2
const H2 = {
  Black500: ({ className = '', children }) => <h2 className={`text-lg font-medium ${className}`}>{children}</h2>,
  Grey500: ({ className = '', children }) => (
    <h2 className={`text-lg font-medium text-grey-66 ${className}`}>{children}</h2>
  ),
  Blue500: ({ className = '', children }) => (
    <h2 className={`text-lg font-medium text-primary-blue ${className}`}>{children}</h2>
  ),

  Black600: ({ className = '', children }) => <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>,
  Grey600: ({ className = '', children }) => (
    <h2 className={`text-lg font-semibold text-grey-66 ${className}`}>{children}</h2>
  ),
  Blue600: ({ className = '', children }) => (
    <h2 className={`text-lg font-semibold text-primary-blue ${className}`}>{children}</h2>
  ),

  Black700: ({ className = '', children }) => <h2 className={`text-lg font-bold ${className}`}>{children}</h2>,
  Grey700: ({ className = '', children }) => (
    <h2 className={`text-lg font-bold text-grey-66 ${className}`}>{children}</h2>
  ),
  Blue700: ({ className = '', children }) => (
    <h2 className={`text-lg font-bold text-primary-blue ${className}`}>{children}</h2>
  ),

  Black800: ({ className = '', children }) => <h2 className={`text-lg font-extrabold ${className}`}>{children}</h2>,
  Grey800: ({ className = '', children }) => (
    <h2 className={`text-lg font-extrabold text-grey-66 ${className}`}>{children}</h2>
  ),
  Blue800: ({ className = '', children }) => (
    <h2 className={`text-lg font-extrabold text-primary-blue ${className}`}>{children}</h2>
  ),
};

// D1
const D1 = ({ className = '', children }) => (
  <h2 className={`text-right text-xl font-bold text-primary-blue ${className}`}>{children}</h2>
);

// BT1
const BT1 = {
  Black500: ({ className = '', children }) => <p className={`text-lg font-medium ${className}`}>{children}</p>,
  Black22_500: ({ className = '', children }) => (
    <p className={`text-lg font-medium text-blk-22 ${className}`}>{children}</p>
  ),

  Black700: ({ className = '', children }) => <p className={`text-lg font-bold ${className}`}>{children}</p>,
  Black22_700: ({ className = '', children }) => <p className={`text-lg text-blk-22 ${className}`}>{children}</p>,
};

// BT2
const BT2 = {
  Black500: ({ className = '', children }) => <p className={`text-lg font-medium ${className}`}>{children}</p>,
  Grey500: ({ className = '', children }) => (
    <p className={`text-lg font-medium text-grey-88 ${className}`}>{children}</p>
  ),

  Black700: ({ className = '', children }) => <p className={`text-lg font-bold ${className}`}>{children}</p>,
  Grey700: ({ className = '', children }) => (
    <p className={`text-lg font-bold text-grey-88 ${className}`}>{children}</p>
  ),

  Black22_500: ({ className = '', children }) => (
    <p className={`text-lg font-medium text-blk-22 ${className}`}>{children}</p>
  ),
  Black22_700: ({ className = '', children }) => (
    <p className={`text-lg font-bold text-blk-22 ${className}`}>{children}</p>
  ),
};

// HT
const HT_500 = ({ className = '', children }) => (
  <span className={`text-sm font-medium text-grey-88 ${className}`}>{children}</span>
);

const HT_700 = ({ className = '', children }) => (
  <span className={`text-sm font-bold text-grey-88 ${className}`}>{children}</span>
);

// HT2
const HT2_500 = ({ className = '', children }) => (
  <span className={`text-xs font-medium text-grey-88 ${className}`}>{children}</span>
);

const HT2_700 = ({ className = '', children }) => (
  <span className={`text-xs font-bold text-grey-88 ${className}`}>{children}</span>
);

// LBL
const LBL = {
  Black500: ({ className = '', children }) => <label className={`text-sm font-medium ${className}`}>{children}</label>,
  Black22_500: ({ className = '', children }) => (
    <label className={`text-sm font-medium text-blk-22 ${className}`}>{children}</label>
  ),
  Grey500: ({ className = '', children }) => (
    <label className={`text-sm font-medium text-grey-88 ${className}`}>{children}</label>
  ),

  Black700: ({ className = '', children }) => <label className={`text-sm font-bold ${className}`}>{children}</label>,
  Black22_700: ({ className = '', children }) => (
    <label className={`text-sm font-bold text-blk-22 ${className}`}>{children}</label>
  ),
  Grey700: ({ className = '', children }) => (
    <label className={`text-sm font-bold text-grey-88 ${className}`}>{children}</label>
  ),
};

// ERR
const ERR = ({ className = '', children }) => (
  <span className={`text-sm font-medium text-red-d7 ${className}`}>{children}</span>
);

export { BT1, BT2, D1, ERR, H1, H2, HT2_500, HT2_700, HT_500, HT_700, LBL };
