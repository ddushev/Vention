import cx from "classnames";
import { WUPTextControl } from "web-ui-pack";

import BaseControl, { BaseControlProps } from "./baseControl";

import styles from "./controls.m.scss";

WUPTextControl.$use(); // register control in the browser
// WUPTextControl.$defaults.clearButton = false;

interface Props extends BaseControlProps<string, WUPTextControl, WUP.Text.Options> {}

export default class TextControl extends BaseControl<WUPTextControl, Props> {
  goRender(props: Record<string, unknown>): JSX.Element {
    return <wup-text {...props} class={cx(styles.ctrl, this.props.className)} />;
  }
}
