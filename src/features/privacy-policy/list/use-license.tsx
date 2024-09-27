const UseLicense = () => {
  return (
    <>
      <p className="text-[24px] font-semibold mb-3">{"2. Use License"}</p>
      <p className="text-[18px] text-color-policy mb-3 text-color-policy">
        {
          "Permission is granted to temporarily download one copy of the materials on AniSage's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:"
        }
      </p>
      <ul className="pl-10 list-disc text-color-policy text-xl mb-3">
        <li className="mb-2">{"modify or copy the materials;"}</li>
        <li className="mb-2">
          {
            "use the materials for any commercial purpose or for any public display;"
          }
        </li>
        <li className="mb-2">
          {
            "attempt to reverse engineer any software contained on AniSage's Website;"
          }
        </li>
        <li className="mb-2">
          {
            "remove any copyright or other proprietary notations from the materials; or"
          }
        </li>
        <li className="mb-2">
          {
            'transferring the materials to another person or "mirror" the materials on any other server.'
          }
        </li>
      </ul>
      <p className="text-[18px] text-color-policy mb-3 text-color-policy">
        {
          "This will let AniSage to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the "
        }
        <span className="text-link-terms cursor-pointer">
          {"Terms Of Service Generator"}
        </span>
        {" and the "}
        <span className="text-link-terms cursor-pointer">
          {"Privacy Policy Generator"}
        </span>
        {"."}
      </p>
    </>
  );
};

export default UseLicense;
