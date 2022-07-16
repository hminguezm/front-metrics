export const variants: Record<string, string> = {
  submit: `
    border-color: rgb(46, 109, 164);
    background: rgb(65, 134, 245);
    color: rgb(255, 255, 255);

    &:active {
      background: rgb(9, 34, 59);
      color: rgb(255, 255, 255, .7);
    }
    &:disabled {
      background: rgba(0, 0, 0, .08);
      color: rgba(0, 0, 0, .3);
      cursor: not-allowed;

      &:hover {
        background: rgba(0, 0, 0, .08);
        color: rgba(0, 0, 0, .3);
        cursor: not-allowed;
      }
    }
    &:hover {
      cursor: pointer;
      background-color: rgb(37, 107, 178);
    }
    &:focus {
      outline-color: rgb(37, 107, 178);
    }
  `,
  cancel: `
    border: 1px solid rgb(255, 71, 66);
    background: rgb(255, 71, 66);
    color: rgb(255, 255, 255);

    &:active {
      opacity: .5;
        &:hover {
          background-color: initial;
          background-position: 0 0;
          color: rgb(255, 71, 66);
        }
    }
    &:disabled {
      background: rgba(0, 0, 0, .08);
      color: rgba(0, 0, 0, .3);
      cursor: not-allowed;

      &:hover {
        background: rgba(0, 0, 0, .08);
        color: rgba(0, 0, 0, .3);
        cursor: not-allowed;
      }
    }
    &:hover {
      cursor: pointer;
      background-color: rgb(233, 39, 40);
    }
    &:focus {
      outline-color: rgb(37, 107, 178);
    }
  `,
};

export const fontSize: Record<string, string> = {
  xs: `
    font-size: 12px;
    height: 24px;
    padding: 2px 16px;
    line-height: 16px;
  `,
  s: `
    font-size: 14px;
    height: 32px;
    padding: 2px 24px;
    line-height: 24px;
  `,
  m: `
    font-size: 16px;
    height: 40px;
    padding: 2px 32px;
    line-height: 32px;
  `,
  l: `
    font-size: 18px;
    height: 46px;
    padding: 2px 40px;
    line-height: 40px;
  `,
};
