import cx from "classnames";
import { WUPSelectControl } from "web-ui-pack";

import BaseControl, { BaseControlProps } from "../baseControl";

import styles from "./select.m.scss";

WUPSelectControl.$use(); // register control in the browser
WUPSelectControl.$defaults.clearButton = false;

interface Props extends BaseControlProps<string, WUPSelectControl, WUP.Select.Options> {}

export default class SelectControl extends BaseControl<WUPSelectControl, Props> {
  goRender(props: Record<string, unknown>): JSX.Element {
    return <wup-select {...props} class={cx(styles.ctrl, this.props.className)} />;
  }
}
