import cx from 'classnames';
import React from 'react';
import styles from '../../styles.module.scss';
import YouAreHere from '../Workspace/YouAreHere';

export default function Preview({ onClick }) {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const videoRef = React.useRef();
  return (
    <div className={styles.Preview}>
      <YouAreHere />
      <video
        ref={videoRef}
        className={cx(styles.PreviewVideo, {
          [styles.PreviewVideoPlaying]: isVideoPlaying,
        })}
        src="/videos/placeholder-vid.mov"
        onCanPlay={() => {
          setIsVideoPlaying(true);
          videoRef.current.play();
        }}
        autoPlay
        playsInline
        muted
        loop
      />
      <svg
        className={styles.PreviewButton}
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 210 69"
      >
        <path fill="#E7FFA1" d="M0 0h210v69H0z" />
        <path
          fill="#BFA1FF"
          d="M28.235 24.96h6.786V44h4.996V24.96h6.785v-4.625H28.235v4.625zm29.87 2.296c-.304-.034-.743-.034-1.283-.034-1.789 0-3.14.574-4.118 1.721v-1.485h-4.727V44h4.794v-6.92c0-3.377 1.79-5.2 4.591-5.2h.743v-4.624zm19.327.202h-5.131l-3.849 10.23-3.713-10.23h-5.334L65.853 44l-2.7 6.55h5.063l9.216-23.092zM106.81 44v-4.625H94.386V34.21h11.849v-4.558h-11.85V24.96h12.424v-4.625H89.356V44h17.453zm9.028.371c1.688 0 3.072-.472 4.187-1.451V44h4.76V33.67c0-2.06-.676-3.646-2.06-4.828-1.384-1.181-3.106-1.789-5.199-1.789-2.802 0-5.097 1.08-6.92 3.275l3.038 2.903c.844-1.283 2.026-1.924 3.545-1.924 1.721 0 2.768 1.114 2.768 2.7v.27a12.239 12.239 0 00-3.308-.472c-1.857 0-3.41.472-4.659 1.384-1.249.911-1.891 2.228-1.891 3.95 0 3.072 2.229 5.232 5.739 5.232zm-.911-5.536c0-1.047 1.013-1.722 2.802-1.722.641 0 1.384.102 2.228.304v1.89c-.911.676-1.89 1.013-2.971 1.013-1.215 0-2.059-.641-2.059-1.485zm20.977-.608c.979.237 1.485.608 1.485 1.047 0 .641-.878 1.08-1.857 1.08-1.654 0-3.241-.743-4.726-2.194l-2.937 3.004c1.384 1.756 4.186 3.207 7.258 3.207 4.22 0 6.921-2.194 6.921-5.334 0-2.801-1.823-4.624-5.435-5.468l-2.465-.574c-.776-.17-1.181-.473-1.181-.878 0-.54.607-.98 1.552-.98 1.317 0 2.6.541 3.917 1.621l2.937-3.106c-1.925-1.721-4.153-2.599-6.651-2.599-1.789 0-3.308.473-4.557 1.452-1.249.945-1.857 2.194-1.857 3.78 0 2.701 1.789 4.49 5.401 5.402l2.195.54zm24.388-2.7c0-2.262-.709-4.254-2.093-5.942-1.384-1.688-3.342-2.532-5.874-2.532-2.397 0-4.355.844-5.874 2.498-1.52 1.654-2.262 3.747-2.262 6.28 0 2.565.81 4.624 2.464 6.211 1.654 1.553 3.714 2.33 6.246 2.33 2.937 0 5.3-1.115 7.089-3.343l-3.173-2.97c-1.013 1.282-2.364 1.924-4.051 1.924-2.06 0-3.444-1.25-3.714-3.039h11.208l.034-1.418zm-7.866-4.254c1.587 0 2.701 1.08 2.802 2.464h-5.942c.304-1.451 1.418-2.464 3.14-2.464zM168.389 44V20.335h-4.794V44h4.794zm10.181-7.63V20.335h-4.963V36.37h4.963zm.438 4.997c0-1.587-1.316-2.903-2.937-2.903-1.62 0-2.869 1.282-2.869 2.903 0 1.62 1.249 2.903 2.869 2.903 1.621 0 2.937-1.283 2.937-2.903z"
        />
      </svg>
    </div>
  );
}
