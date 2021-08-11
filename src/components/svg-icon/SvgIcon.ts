import "./SvgIcon.scss";

export declare interface SvgIconProps {
  class?: string;
}
class SvgIcon {
  public static onClick() {
    console.log("onClick");
  }

  public render(props: SvgIconProps) {
    let icon = document.createElement("svg");
    icon.classList.add("wf-icon-svg");
    let link = document.createElement("use");
    link.classList.add("#" + props.class);
    icon.appendChild(link);
    return icon;
  }
}
const svgIcon = new SvgIcon().render.bind(null);
export default svgIcon;
