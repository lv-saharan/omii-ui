import uiBase from "../uiBase";
import css from "./index.scss";
const { define, h, Component, classNames, render } = omii;
const STAR_TYPES = {
  STAR: "star",
  HALF: "star_half",
  BORDER: "star_border",
};
export default class extends uiBase {
  static css = css;
  static defaultProps = {
    rateable: false,
    maxScore: 5,
    score: 0,
    color: null,
    size: 1,
  };
  static propTypes = {
    rateable: Boolean,
    maxScore: Number,
    score: Number,
    size: Number,
    color: String,
  };
  #tempScore = -1;
  /**當前分值 */
  get rateScore() {
    return this.$props.score;
  }
  install() {
    this.#tempScore = this.$props.score;
  }
  rate(score) {
    this.fire("rate", score);
    this.#tempScore = score;
    this.update$Props({ score });
  }

  render(props) {
    let settings = this.$props;
    let { maxScore, rateable, size, color } = settings;
    let stars = [];
    let score = this.#tempScore;
    for (let i = 0; i < maxScore; i++) {
      if (score - i >= 0.5) {
        stars.push(STAR_TYPES.STAR);
      } else if (score - i > 0) {
        stars.push(STAR_TYPES.HALF);
      } else {
        stars.push(STAR_TYPES.BORDER);
      }
    }

    return (
      <div class={classNames("rate-wrap", "rate-" + this.#tempScore)}>
        {stars.map((name, index) => {
          if (rateable) {
            return (
              <oi-icon
                name={name}
                size={size}
                color={color}
                className={name}
                onmouseenter={(evt) => {
                  evt.preventDefault();
                  evt.stopPropagation();
                  this.#tempScore = index + 1;
                  this.fire("tryRate", this.#tempScore);
                  this.lazyUpdate();
                }}
                onmouseleave={(evt) => {
                  evt.preventDefault();
                  evt.stopPropagation();
                  this.#tempScore = this.rateScore;
                  this.lazyUpdate();
                }}
                onclick={(evt) => {
                  evt.preventDefault();
                  evt.stopPropagation();
                  this.rate(index + 1);
                }}
              />
            );
          } else {
            return (
              <oi-icon name={name} size={size} color={color} className={name} />
            );
          }
        })}
      </div>
    );
  }
}
