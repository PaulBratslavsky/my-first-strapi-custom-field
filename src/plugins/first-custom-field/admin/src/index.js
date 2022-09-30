import MyIcon from './components/MyIcon';
import getTrad from './utils/getTrad';

export default {
  register(app) {
    app.customFields.register({
      name: 'first-custom-field',
      pluginId: 'first-custom-field',
      type: 'string',
      icon: MyIcon,
      intlLabel: {
        id: getTrad('color-picker.label'),
        defaultMessage: 'Hi',
      },
      intlDescription: {
        id: getTrad('color-picker.description'),
        defaultMessage: 'This is my first custom field',
      },

      components: {
        Input: async () =>
          import('./components/MyCustomField'),
      },
      options: {
      },
    });
  },
};
