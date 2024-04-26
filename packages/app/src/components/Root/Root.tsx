import {
  UserSettingsSignInAvatar,
  useUserProfile,
} from '@backstage/plugin-user-settings';
import React, { PropsWithChildren } from 'react';
import LogoIcon from './LogoIcon';

const SeperateIcon = () => {
  return (
    <svg
      height="32"
      shapeRendering="geometricPrecision"
      stroke="#6e6e6e"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="32"
    >
      <line x1="0" y1="0" x2="0" y2="32" />
    </svg>
  );
};

export const Root = ({ children }: PropsWithChildren<{}>) => {
  const user = useUserProfile();

  return (
    <div style={{ background: 'white' }}>
      <nav
        style={{
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 'auto',
          padding: '0 24px ',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', height: '40px' }}>
          <div style={{ padding: '8px' }}>
            <LogoIcon />
          </div>
          <div
            style={{
              flex: '0 0 auto',
              display: 'flex',
              margin: '0 16px',
              width: '2px',
            }}
          >
            <SeperateIcon />
          </div>
          <div style={{ padding: '8px' }}>
            <b style={{ fontSize: '18px' }}>{user.displayName}</b>
          </div>
        </div>
        <div>
          <div>
            <UserSettingsSignInAvatar size={30} />
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};
