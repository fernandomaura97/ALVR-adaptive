define({
    "customVideoScale": "персонализирана резолюция",
    "steamVRRestartSuccess": "SteamVR се рестартира успешно",
    "_root_video_tab.name": "Видео",
    "_root_audio_tab.name": "Аудио",
    "_root_headset_tab.name": "Слушалки",
    "_root_connection_tab.name": "Връзка",
    "_root_extra_tab.name": "допълнително",
    "_root_video_adapterIndex.name": "Индекс на GPU",
    "_root_video_encodeBitrateMbs.name": "Битрейт на видео",
    "_root_video_encodeBitrateMbs.description": "Битрейт на видео излъчване. Препоръчва се 30Mb/сек. \nПо-високата скорост на предаване осигурява по-добро качество на изображението, но увеличава латентността и мрежовия трафик.",
    "_root_video_resolutionDropdown.name": "Разрешение на видео",
    "_root_video_resolutionDropdown.description": `100% води до естествената резолюция на Oculus Quest.
    Задаването на разделителната способност може да донесе известно подобрение в качеството на зрението, но не се препоръчва.
    Разделителна способност, по-ниска от 100%, може да намали латентността и да увеличи производителността на мрежата`,
    "_root_video_renderResolution-choice-.name": "Основа за резолюция на видео кодиране",
    "_root_video_recommendedTargetResolution-choice-.name": "Предпочитана резолюция за изобразяване на играта",
   "_root_video_ipd.name": "Междузъбично разстояние",
    "_root_video_foveatedRendering.name": "Фовеатично изобразяване",
    "_root_video_foveatedRendering_enabled.description": `Техника, при която центърът на изображението се изобразява с висока разделителна способност, докато покрайнините се изобразяват с по-ниска разделителна способност.
    Резултатът е много по-ниска видеоразделителна способност, която трябва да се предава по мрежата.
    По-малкият видеоклип при една и съща битрейт може да запази повече подробности и да намали латентността едновременно.
    FFR причинява някои визуални артефакти по краищата на изгледа, които са повече или по-малко видими в зависимост от настройките и играта`,
    "_root_video_foveatedRendering_content_strength.name": "Сила",
    "_root_video_foveatedRendering_content_strength.description": "По-високата стойност означава по-малко детайли към ръбовете на рамката и повече артефакти",
    "_root_video_foveatedRendering_content_shape.description": "Формата на фовеатен рендеринг",
    "_root_video_foveatedRendering_content_verticalOffset.name": "Вертикално отместване",
    "_root_video_foveatedRendering_content_verticalOffset.description": "По-високата стойност означава, че висококачествената област на рамката се премества по-надолу.",
    "_root_video_colorCorrection.name": "Корекция на цветовете",
    "_root_video_colorCorrection_content_brightness.name": "Яркост",
    "_root_video_colorCorrection_content_contrast.name": "Контраст",
    "_root_video_colorCorrection_content_saturation.name": "Наситеност",
    "_root_video_colorCorrection_content_gamma.name": "Гама",
    "_root_video_colorCorrection_content_gamma.description": "Това контролира яркостта, но запазва черното в черно и бялото в бялото",
    "_root_video_colorCorrection_content_sharpening.name": "Заточване",
    "_root_video_codec-choice-.name": "Видео кодек",
    "_root_video_codec-choice-.description": "HEVC се предпочита за постигане на по-добро визуално качество при по-ниски битрейтове. Видеокартите AMD работят най-добре с HEVC.",
    "_root_video_codec_H264-choice-.name": "h264",
    "_root_video_codec_HEVC-choice-.name": "HEVC (h265)",
    "_root_audio_gameAudio.name": "Аудио предаване на игра",
    "_root_audio_gameAudio_content_deviceDropdown.name": "Изберете аудио устройство",
    "_root_audio_gameAudio_content_deviceDropdown.description": "Аудио устройство използвано за улавяне на звук",
    "_root_audio_microphone.name": "Излъчен микрофон",
    "_root_audio_microphone.description": "Предава сигнала на микрофона на слушалките.",
    "_root_audio_microphone_content_deviceDropdown.name": "Изберете виртуално устройство за въвеждане",
    "_root_audio_microphone_content_deviceDropdown.description": "За да работи микрофонът ви, трябва да инсталирате VB-CABLE Virtual Audio Device или подобен софтуер.",
    "_root_headset_trackingFrameOffset.name": "Изместване на рамката за проследяване",
    "_root_headset_trackingFrameOffset.description": "Офсет за алгоритъма за предсказване на поза",
    "_root_headset_positionOffset.name": "Офсетна позиция на слушалките",
    "_root_headset_positionOffset_0.name": "x",
    "_root_headset_positionOffset_1.name": "y",
    "_root_headset_positionOffset_2.name": "z",
    "_root_headset_force3dof.name": "Принуден 3Dof",
    "_root_headset_force3dof.description": "Принуждава режима на 3 степени на свобода (като Oculus Go)",
    "_root_headset_controllers.name": "Контролери",
    "_root_headset_controllers_content_poseTimeOffset.name": "Забавяне на проследяване на позицията",
    "_root_headset_controllers_content_poseTimeOffset.description": "Офсет за алгоритъма за предсказване на позицията.",
    "_root_headset_controllers_content_positionOffsetLeft.name": "Изместване на позицията",
    "_root_headset_controllers_content_positionOffsetLeft.description": "Изместване на позицията в метри за левия контролер. \nЗа десния контролер стойността за оста x се отразява.",
    "_root_headset_controllers_content_positionOffsetLeft_0.name": "x",
    "_root_headset_controllers_content_positionOffsetLeft_1.name": "y",
    "_root_headset_controllers_content_positionOffsetLeft_2.name": "z",
    "_root_headset_controllers_content_rotationOffsetLeft.name": "Изместване на въртенето",
    "_root_headset_controllers_content_rotationOffsetLeft.description": "Изместване на въртенето в градуси за левия контролер. \nЗа десния контролер се отразяват завъртанията Y и Z.",
    "_root_headset_controllers_content_rotationOffsetLeft_0.name": "x",
    "_root_headset_controllers_content_rotationOffsetLeft_1.name": "y",
    "_root_headset_controllers_content_rotationOffsetLeft_2.name": "z",
    "_root_headset_controllers_content_hapticsIntensity.name": "Интензивност на тактилна обратна връзка",
    "_root_headset_headsetEmulationMode.name": "Режим на емулация на слушалки",
    "_root_headset_headsetEmulationMode.description": "Емулира различни слушалки за по-добра съвместимост.",
    "_root_headset_controllers_content_controllerMode.name": "Режим на емулация на контролер",
    "_root_headset_controllers_content_controllerMode.description": "Емулира различни контролери за по-добра съвместимост или ръчно проследяване.",
    "_root_connection_listenPort.name": "Порт за излъчен сървър",
    "_root_connection_throttlingBitrateBits.name": "Макс. битрейт на излъчване",
    "_root_connection_clientRecvBufferSize.name": "Размер на клиентския буфер",
    "_root_connection_clientRecvBufferSize.description": "Размерът на буфера от страна на клиента зависи от битрейта. \nПрепоръчва се изчислен размер. Ако изпитвате загуба на пакети, увеличете буфера.",
    "_root_connection_frameQueueSize.description": "Максимум кадри в опашката.",
    "_root_connection_aggressiveKeyframeResend.name": "Интензивен опит за повторен пакет",
    "_root_connection_aggressiveKeyframeResend.description": `Намалява минималния интервал между ключовите кадри от 100ms на 5ms.
    Използва се само когато се наблюдава загуба на пакети. Подобрява производителността в мрежи с висока загуба на пакети.`,
    "_root_connection_disableThrottling.name": "Деактивирайте пропускането на ленти",
    "_root_connection_disableThrottling.description": "Деактивирайте пропускането (регулирането) на цикъла на часовника. Изпраща данни възможно най-бързо.",
    "_root_connection_suppressFrameDrop.name": "Потискане на загубата на кадър",
    "_root_connection_bufferOffset.name": "Буферно отместване",
    "_root_connection_bufferOffset.description": "Офсет за увеличаване или намаляване на изчисления размер на клиентския буфер. Клиентският буфер не може да бъде отрицателен",
    "_root_extra_revertConfirmDialog.name": "Потвърдете възстановяването",
    "_root_extra_revertConfirmDialog.description": "Поискайте потвърждение, преди да върнете параметъра до стойността му по подразбиране.",
    "_root_extra_restartConfirmDialog.name": "Потвърдете рестартирането",
    "_root_extra_restartConfirmDialog.description": "Поискайте потвърждение, преди да рестартирате SteamVR.",
    "audioDeviceError": "Не са намерени устройства за възпроизвеждане. Не може да се излъчи аудио или микрофон",
    "_root_extra_theme-choice-.name": "Тема",
    "_root_extra_theme-choice-.description": "Елате в Тъмната страна. \n Имаме бисквитки.",
    "_root_extra_theme_systemDefault-choice-.name": "Система",
    "_root_extra_theme_classic-choice-.name": "Класически",
    "_root_extra_theme_darkly-choice-.name": "Мрачно",
});