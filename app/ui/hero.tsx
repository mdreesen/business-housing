import Image from 'next/image';

// Composable
import seasons from '../composables/seasons';


// Styling
import styles from './styles/Hero.module.css';

export default function Hero() {

    const season = seasons();
    return (
        <div className="flex items-center justify-center">
            <Image
                src={`/assets/background-${season}.webp`}
                priority
                width={1000}
                height={300}
                className={styles['hero']}
                alt="Screenshots of the dashboard project showing desktop and mobile versions"
            />
        </div>
    )
}
