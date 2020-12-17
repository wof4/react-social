import React, { useState, useEffect, ChangeEvent } from 'react';



type propsType = {
  status: string
  updateMyStatus: (localState: string) => void
}

const ProfileStatusWithHook: React.FC<propsType> = (props) => {
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

  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => { setStatus(e.currentTarget.value); };

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
