import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export class CountSlider extends React.Component {
    state = {
        inputValue: 1,
    }

    onChange = (value) => {
        const cleanValue = Number(value) ? Math.floor(value) : this.state.inputValue;
        this.setState({
            inputValue: cleanValue, // slider会被rerender
        });
        this.props.onCountSliderChange(cleanValue); // 由于上一层中有debounce所以整体不会被rerender
    }

    render() {
        return (
            <Row>
                <Col span={12}>
                    <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={this.state.inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}
