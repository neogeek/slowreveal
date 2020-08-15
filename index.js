const defaultOptions = {
    speed: 20
};

const slowreveal = (svg, options = {}) => {
    const { speed } = { ...defaultOptions, ...options };

    const load = () => {
        const paths = (svg.getSVGDocument
            ? svg.getSVGDocument()
            : svg
        ).querySelectorAll('path');

        paths.forEach(path => {
            path.style.strokeDasharray = path.getTotalLength();
            path.style.strokeDashoffset = path.getTotalLength();
        });

        window.requestAnimationFrame(tick.bind(this, svg));
    };

    const tick = () => {
        const paths = [].slice.call(
            (svg.getSVGDocument ? svg.getSVGDocument() : svg).querySelectorAll(
                'path'
            )
        );

        const nextPath = paths.find(
            path => parseFloat(path.style.strokeDashoffset, 10) > 0
        );

        if (nextPath) {
            nextPath.style.strokeDashoffset = `${Math.max(
                parseFloat(nextPath.style.strokeDashoffset, 10) - speed,
                0
            )}px`;

            window.requestAnimationFrame(tick.bind(this, svg));
        }
    };

    svg.addEventListener('load', load);
};

export default slowreveal;
