const getRandomArbitrary = (props) => {
    return Math.random() * (props.max - props.min) + props.min;
}

export default getRandomArbitrary;

