import {CustomView} from '../../components/ui/CustomeView';
import {useState} from 'react';
import {Card} from '../../components/ui/Card';
import {CustomSwich} from '../../components/ui/CustomSwich';
import {Separator} from '../../components/ui/Separator';

export const SwitchScreen = () => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <CustomView style={{marginTop: 100, paddingHorizontal: 10}}>
      <Card>
        <CustomSwich
          isOn={state.isActive}
          onChange={value => setState({...state, isActive: value})}
          text="¿Es Activo?"
        />
        <Separator />
        <CustomSwich
          isOn={state.isHungry}
          onChange={value => setState({...state, isHungry: value})}
          text="¿Tiene Hambre?"
        />
        <Separator />
        <CustomSwich
          isOn={state.isHappy}
          onChange={value => setState({...state, isHappy: value})}
          text="¿Es Feliz?"
        />
      </Card>
    </CustomView>
  );
};
