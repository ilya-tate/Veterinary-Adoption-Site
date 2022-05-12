import React from "react";
import { Form, Header, Icon, Segment, Image } from "semantic-ui-react";

const DragNDrop = ({
  inputRef,
  handleChange,
  preview,
}) => {
  return (
    <>
      <Form.Field style={{width: "20vw"}}>
        <Segment placeholder basic secondary>
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            onChange={handleChange}
            name="pictures"
            ref={inputRef}
          />
          <div
            style={{ cursor: "pointer" }}
            onDragOver={(e) => {
              e.preventDefault();
            }}
            onDragLeave={(e) => {
              e.preventDefault();
            }}
            onDrop={(e) => {
              e.preventDefault();
              // console.log(e.dataTransfer.files);
              const droppedFile = e.dataTransfer.files[0];
              setMedia(droppedFile);
              setPreview(URL.createObjectURL(droppedFile));
            }}
            onClick={() => inputRef.current.click()}
          >
            {preview === null ? (
              <>
                <Segment
                  placeholder
                  basic
                >
                  <Header icon>
                    <Icon name="file image outline" />
                    Drag N Drop image here to upload
                  </Header>
                </Segment>
              </>
            ) : (
              <>
                <>
                  <Segment placeholder basic>
                    <Image
                      src={preview}
                      size="medium"
                      centered
                      style={{ cursor: "pointer" }}
                    />
                  </Segment>
                </>
              </>
            )}
          </div>
        </Segment>
      </Form.Field>
    </>
  );
};

export default DragNDrop;
