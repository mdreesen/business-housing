export default function googleMap() {

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21267.690309416583!2d-114.34898895687498!3d48.21699149767616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53665a437346e139%3A0x553c3144b1e8d74f!2s162%20Timberwolf%20Pkwy%20c%2C%20Kalispell%2C%20MT%2059901!5e0!3m2!1sen!2sus!4v1701059116354!5m2!1sen!2sus" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
    );
}