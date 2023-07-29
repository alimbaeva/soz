import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import './modalWindow.scss';

export type Props = {
  children?: ReactNode;
  active: boolean;
  setActive: () => void;
};

export const ModalWindow: FC<Props> = (props: Props) => {
  const stopProp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  return ReactDOM.createPortal(
    props.active && (
      <div className="modal active" onClick={props.setActive}>
        <div className="modal__content" onClick={(e) => stopProp(e)}>
          {props.children}
        </div>
      </div>
    ),
    document.body
  );
};
