const Cross: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <path
        stroke="#374151"
        strokeLinecap="round"
        strokeWidth={1.6}
        d="m5.2 14.8 9.6-9.6M5.2 5.2l9.6 9.6"
      />
    </svg>
  );
};

export default Cross;
