import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import styles from '../Styles/MoreDetailsVideo.module.css';

export default function MoreDetailsVideo(props) {

    const { ref: video, inView: videoInView, entry: videoEntry } = useInView()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        })

    }, [])

    useEffect(() => {
        if (videoInView) {
            videoEntry.target.className += ' opacityAnimation'
            videoEntry.target.style.animationDelay = '1.5s'

        }
    }, [
        videoInView, videoEntry
    ])

    return (
        <div className={styles.video} ref={video}>
            <iframe src={props.video} width="90%" height="480" title={props.normalNname} allowFullScreen style={{maxWidth:'100%',height:'auto',aspectRatio:'480/229'}}></iframe>
        </div>
    );
}