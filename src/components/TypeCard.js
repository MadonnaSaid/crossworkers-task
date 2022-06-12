import { Icon, Radio } from "semantic-ui-react";
function RemoveCard(props) {
  return (
    <div className="m-4">
      <div className=" flex m-4 p-4 border-slate-300">
        <div className="flex-none">
          <Icon name={props.Icon} size="big" className={props.Color} />
        </div>
        <div className="grow mx-2 text-2xl border-b-[1px] pb-3 ">
          <h2>{props.Name}</h2>
        </div>
        <div className="flex-none">
          <Radio slider defaultChecked />
        </div>
      </div>
    </div>
  );
}

export default RemoveCard;
