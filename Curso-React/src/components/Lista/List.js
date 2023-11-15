import Item from "../item/Item";

function List(props) {
  return (
    <>
      <ul>
        <Item marca="Fiat" data="1990ihbufvuyfuygchvy"/>
        <Item marca="ferrari" data="1820"/>
        <Item marca="renault" data="1980"/>
        <Item marca="chevrolet" data="1980"/>
      </ul>
    </>
  );
}

export default List;
