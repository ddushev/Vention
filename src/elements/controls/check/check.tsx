import cx from "classnames";
import { WUPCheckControl } from "web-ui-pack";

import InlineLabel from "@/elements/inlineLabel/inlineLabel";
import BaseControl, { BaseControlProps } from "../baseControl";

import styles from "./check.module.scss";

WUPCheckControl.$use(); // register control in the browser
WUPCheckControl.$defaults.reverse = true;
// WUPTextControl.$defaults.clearButton = false;

interface Props extends BaseControlProps<boolean, WUPCheckControl, WUP.Check.Options> {}

export default class CheckControl extends BaseControl<WUPCheckControl, Props> {
  goRender(props: Record<string, unknown>): JSX.Element {
    if (this.props.inlineLabelText) {
      return (
        <InlineLabel label={this.props.inlineLabelText}>
          <wup-check {...props} class={cx(styles.ctrl, this.props.className)} />
        </InlineLabel>
      );
    }
    return <wup-check {...props} class={cx(styles.ctrl, this.props.className)} />;
  }
}
