import { Icon, Label } from "semantic-ui-react";
function UpdatesCard(props) {
  return (
    <div className="m-4">
      <div className=" flex border-b-[1px] m-4 p-4 border-slate-300">
        <div className="flex-none">
          <Label>
            <Icon
              name={props.iconName}
              className="flex-none fill-current text-black"
            />
            {props.updatesNum}
          </Label>
        </div>
        <div className="grow">
          <text className="m-4 text-xl">{props.updatesCategory}</text>
        </div>
        <div className="flex-none">
          <Icon name="arrow right" className="text-black"></Icon>
        </div>
      </div>
    </div>
  );
}

export default UpdatesCard;
