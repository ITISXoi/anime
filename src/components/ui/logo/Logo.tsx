/* eslint-disable @next/next/no-img-element */
const Logo = ({ width = "140px" }: { fontSize?: string; width?: string }) => {
  return (
    <div
      className="flex items-center justify-start text-center"
      style={{ maxHeight: "40px", width: width }}
    >
      <a href="/">
        <img alt="Anisage" src="/ani-logo-2.svg" />
      </a>
    </div>
  );
};

export default Logo;
