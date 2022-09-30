import React from 'react';
import { useIntl } from 'react-intl';
import { TextInput } from '@strapi/design-system/TextInput';
import { Stack } from '@strapi/design-system/Stack';
import VideoPlayer from '../VideoPlayer';

export default function index({
  name,
  error,
  description,
  onChange,
  value,
  intlLabel,
}) {
  const { formatMessage } = useIntl();

  return (
    <Stack spacing={1}>
      <TextInput
        placeholder="Type something"
        label={formatMessage(intlLabel)}
        name={name}
        error={error}
        hint={description && formatMessage(description)}
        onChange={onChange}
        value={value}
      />
      {value && <VideoPlayer videoId={"dQw4w9WgXcQ"} />}
    </Stack>

  )
}
