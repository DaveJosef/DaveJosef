import React, { useRef } from 'react';

function LanguageSelect({ handleChangeLanguage }) {

    const selectRef = useRef(null);

    const onChange = () => {
        const select = selectRef.current;
        const selectedOption = select.options[select.selectedIndex];
        const selectedLanguage = selectedOption.value;
        handleChangeLanguage(selectedLanguage);
    };

  return (
    <>
        <select onChange={onChange} ref={selectRef} name="language-select" id="language-select">
            <option value="portuguese">PT-BR</option>
            <option value="english">EN-US</option>
        </select>
    </>
  );
}

export default LanguageSelect;