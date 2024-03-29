import { memo, useRef, useState } from "react";

import { updateImage } from "@/api/apiUser";
import Form from "@/elements/form/form";
import Button from "@/elements/button/button";
import alertModal from "@/utils/alertModal/alertModal";

import styles from "./userImage.module.scss";

const UserImage = memo(({ profileImg }: { profileImg?: string }) => {
  const [uploadedImg, setUploadedImg] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async () => {
    const fileInput = fileInputRef.current;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const imgFile = fileInput.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImg(e.target?.result as string);
      };
      reader.readAsDataURL(imgFile);
      await updateImage(imgFile);
    } else {
      alertModal("Please upload a image first!");
    }
  };

  return (
    <div className={styles.userImageContainer}>
      <div className={styles.imageSectionContainer}>
        {uploadedImg && <img className={styles.profileImage} src={uploadedImg} alt="profile-img" />}
        {!uploadedImg && profileImg && <img className={styles.profileImage} src={profileImg} alt="profile-img" />}
        {!uploadedImg && !profileImg && (
          <div className={styles.noImageContainer}>
            <div className={styles.noImageBox}>
              <p className={styles.noImageText}>No Image</p>
            </div>
          </div>
        )}
      </div>
      <Form>
        <div className={styles.fileFormContainer}>
          <input className={styles.fileUploadInput} type="file" name="profileImg" ref={fileInputRef} />
          <Button onClick={handleUpload}>Change profile image</Button>
        </div>
      </Form>
    </div>
  );
});

export default UserImage;
