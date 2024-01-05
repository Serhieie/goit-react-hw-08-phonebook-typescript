interface TableHeadProps {
  isThemeDark: boolean;
}

export const TableHead: React.FC<TableHeadProps> = ({ isThemeDark }) => {
  return (
    <thead className="text-lg  right-0 left-0 top-0 w-full  1xl2:text-2xl">
      <tr
        className={`${
          isThemeDark
            ? 'border-tableBorderColorDark '
            : 'border-tableBorderColor '
        } border-b-2  `}
      >
        <th
          className={`${
            isThemeDark
              ? 'bg-tableHeaderBackgroundDark  text-darkFontDark '
              : 'bg-tableHeaderBackground text-darkFont '
          } items-center  
           font-bold min-w-4 p-2 md:p-0.5 w-[7%]`}
        >
          #
        </th>
        <th
          className={`${
            isThemeDark
              ? 'bg-tableHeaderBackgroundDark text-darkFontDark '
              : 'bg-tableHeaderBackground text-darkFont '
          } items-center 
           font-bold min-w-4 p-2 md:p-0.5  w-[40%]`}
        >
          Name
        </th>
        <th
          className={`${
            isThemeDark
              ? 'bg-tableHeaderBackgroundDark text-darkFontDark '
              : 'bg-tableHeaderBackground text-darkFont '
          }items-center  
           font-bold min-w-4 p-2 md:p-0.5  w-[42%]`}
        >
          Phone Number
        </th>
        <th
          className={`${
            isThemeDark
              ? 'bg-tableHeaderBackgroundDark  text-darkFontDark '
              : ' bg-tableHeaderBackground text-darkFont '
          }items-center  
           font-bold min-w-4 p-2 md:p-0.5  pr-3  1xl2:pr-7 w-[15%]`}
        >
          Action
        </th>
      </tr>
    </thead>
  );
};
