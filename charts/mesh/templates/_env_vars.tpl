{{- define "service-url-configs" -}}
- name: USER_SERVICE_URL
  value: {{ default "http://127.0.0.1:3003" .Values.serviceUrls.userService }}
- name: COURSE_SERVICE_URL
  value: {{ default "http://127.0.0.1:3002" .Values.serviceUrls.courseService }}
- name: RESOURCE_BOX_SERVICE_URL
  value: {{ default "http://127.0.0.1:3001" .Values.serviceUrls.resouceBox }}
{{- end -}}



# 环境变量默认是development环境用于独立调试，最终运行环境是需要根据最外层 runtime 的全局变量来决定
{{- define "node-env" -}}
- name: NODE_ENV
  value: {{ default "development" .Values.global.nodeEnv }}
{{- end -}}  