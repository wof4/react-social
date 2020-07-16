import React, { useState, useEffect } from 'react';

const ProfileStatusWithHook = (props) => {
  const { status } = props;

  const [editMode, setEditMode] = useState(false);
  const [localStatus, setStatus] = useState(status);

  const activeteEditMode = () => { setEditMode(true); };

  const deActiveteEditMode = () => {
    setEditMode(false);
    props.updateMyStatus(localStatus);
  };

  useEffect(() => {
    setStatus(status);
  }, [status]);

  const onChangeStatus = (e) => { setStatus(e.currentTarget.value); };

  return (
    <div>
      {!editMode
                && (
                <div>
                  <span role="presentation" onClick={activeteEditMode}>
                    {' '}
                    Статус:
                    {status || <span>Статус отсутвует</span>}
                  </span>
                </div>
                )}
      {editMode
                && (
                <div>
                  <input
                    onChange={onChangeStatus}
                    onBlur={deActiveteEditMode}
                    value={localStatus}
                  />
                </div>
                )}
    </div>
  );
};
export default ProfileStatusWithHook;
