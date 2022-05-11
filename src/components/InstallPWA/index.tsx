import React from "react";
import useIosInstallPrompt from "../../hooks/useIosInstallPrompt";
import useWebInstallPrompt from "../../hooks/useWebInstallPrompt";

export const InstallPWA = () => {
  const [iosInstallPrompt, handleIOSInstallDeclined] = useIosInstallPrompt();
  const [webInstallPrompt, handleWebInstallDeclined, handleWebInstallAccepted] =
    useWebInstallPrompt();

  if (!iosInstallPrompt && !webInstallPrompt) {
    return null;
  }
  return (
    <div>
      <h3>Install App</h3>
      {iosInstallPrompt && (
        <>
          <h3 className="text-center">
            Tap
            <img
              src="content/images/Navigation_Action_2x.png"
              style={{ margin: "auto 8px 8px" }}
              className=""
              alt="Add to homescreen"
              width="20"
            />
            then &quot;Add to Home Screen&quot;
          </h3>
          <div className="d-flex justify-content-center">
            <button onClick={handleIOSInstallDeclined}>Close</button>
          </div>
        </>
      )}
      {webInstallPrompt && (
        <div className="d-flex justify-content-around">
          <button color="primary" onClick={handleWebInstallAccepted}>
            Install
          </button>
          <button onClick={handleWebInstallDeclined}>Close</button>
        </div>
      )}
    </div>
  );
};
