import { Modal, TextContainer } from '@shopify/polaris';
import React, { ReactElement } from 'react';

// Define the props interface
interface VideoModalProps {
  activator:
    | ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.RefObject<HTMLElement>
    | undefined;
  open: boolean;
  onClose: () => void;
  title: string;
}

// Use the props interface in the component
export const VideoModal: React.FC<VideoModalProps> = ({
  activator,
  open,
  onClose,
  title,
}) => {
  return (
    <Modal activator={activator} open={open} onClose={onClose} title={title}>
      <Modal.Section>
        <TextContainer>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/SqcY0GlETPk?si=jVBEp1ls5BZd3xtw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </TextContainer>
      </Modal.Section>
    </Modal>
  );
};
