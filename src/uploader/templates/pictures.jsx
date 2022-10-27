const { h, classNames } = omii;
import { creatPreviewUrl } from "preview-utils";
import { getFileType } from "../../utils";

const isImage = (file) => {
  return file?.type?.indexOf("image") == 0;
};

const createCard = (file) => {
  if (isImage(file)) {
    file.url = file.url ?? creatPreviewUrl(file.file);
    return (
      <div
        title={file.name}
        class="image"
        style={{
          backgroundImage: `url(${file.url})`,
        }}
      ></div>
    );
  }
  return (
    <div className="file">
      <oi-icon
        view-box="1024"
        name={getFileType(file.ext)}
        type="file-type"
        class="position-absolute top-0 start-50 translate-middle-x"
      />
      <label class="position-absolute bottom-0 start-50 translate-middle-x">
        {file.name}
        {file.ext}
      </label>
    </div>
  );
};
export default ({ component }) => {
  let { files, selectText, multiple } = component.$props;
  return (
    <div className="pictures">
      <div class="row row-cols-auto g-4">
        {files.map((file, index) => {
          return (
            <div className="col" key={`file-${index}`}>
              <div
                class="card"
                onClick={() => {
                  component.open(index);
                }}
                // onMouseEnter={(evt) => {
                //   evt.target.classList.add("hover");
                // }}
                // onMouseLeave={(evt) => {
                //   evt.target.classList.remove("hover");
                // }}
              >
                {createCard(file)}

                <div className="actions">
                  <div class="position-absolute top-50 start-50 translate-middle">
                    {isImage(file) && <oi-icon name="search" />}
                    <oi-icon
                      name="delete_forever"
                      onClick={(evt) => {
                        evt.preventDefault();
                        evt.stopPropagation();
                        component.remove(index);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {(multiple || files.length == 0) && (
          <div className="col selector-col" key="selector">
            <div class="card selector">
              <label
                class={classNames("selector", { multiple })}
                title={selectText}
                onClick={() => {
                  component.open();
                }}
              >
                <oi-icon name="add" />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
