import UKFlagIcon from "@/assets/icons/united-kingdom-icon";
import VNFlagIcon from "@/assets/icons/vietnam-icon";
import { ENG_LANG, ENGLISH, listLanguage, VIETNAM } from "@/utils/menu";
import { useTranslation } from "@/translations/TranslationProvider";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useState } from "react";

const MenuTranslate = () => {
  const { locateChanged, locate } = useTranslation();
  const [langeGuage, setLanguage] = useState(locate);
  const items: MenuProps["items"] = listLanguage.map((item) => {
    return {
      label: (
        <div className="flex flex-row gap-4 items-center">
          <a
            className="cursor-pointer"
            onClick={() => {
              if (item.title === ENG_LANG) {
                setLanguage(ENG_LANG);
                locateChanged(ENG_LANG);
              }
            }}
          >
            {item.country}
          </a>
          {item.title === ENG_LANG ? <UKFlagIcon /> : <VNFlagIcon />}
        </div>
      ),
      key: item.title,
    };
  });
  if (listLanguage.length > 1) {
    return (
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        className="mr-2 cursor-pointer header__nav-link"
      >
        <Space className="flex content-center justify-center justify-items-center">
          <span>{langeGuage === ENG_LANG ? ENGLISH : VIETNAM}</span>
          <FontAwesomeIcon icon={faChevronDown} className="font-size-10" />
        </Space>
      </Dropdown>
    );
  }
  return <span>{langeGuage === ENG_LANG ? ENGLISH : VIETNAM}</span>;
};

export default MenuTranslate;
