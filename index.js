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

        const nextPath = paths.find(path => path.style.strokeDashoffset > 0);

        if (nextPath) {
            nextPath.style.strokeDashoffset = Math.max(
                nextPath.style.strokeDashoffset - speed,
                0
            );

            window.requestAnimationFrame(tick.bind(this, svg));
        }
    };

    svg.addEventListener('load', load);
};

export default slowreveal;
