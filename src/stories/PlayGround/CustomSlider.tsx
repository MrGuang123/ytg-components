import { Slider } from '@mui/material';

const CustomSlider = () => {
    return (
        <div>
            <Slider
                defaultValue={30}
                className="text-teal-600"
                componentsProps={{
                    thumb: { className: 'rounded-full hover:bg-yellow-600' }
                }}
            />
            <Slider
                defaultValue={30}
                className="text-teal-600 "
                classes={{ active: 'shadow-none' }}
                componentsProps={{
                    thumb: { className: 'rounded-sm hover:bg-yellow-200' },
                }}
            />
        </div>

    )
}

export default CustomSlider