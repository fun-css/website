import React from 'react'
const Table = ({children , funcss , bordered , stripped , hoverable , showTotal}) => {
return ( 
<table className={`table ${funcss}  ${bordered}  ${stripped}  ${hoverable}`}>
{children}
{
    showTotal &&
<tr className="borderless">
<td className="padding borderless text-bold">  Total  {children.length - 1} </td>
</tr>
}
</table>
);
}
export default Table;