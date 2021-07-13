{{- define "mesh
{{- printf "%s-mysql" .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

# return MySQL config
{{- define "mysql.configs" -}}
{{- if .Values.mysql.localMysqlEnabled }}
- name: DATABASE_HOST
  value: {{ (include "mesh }}  
{{- else }}
- name: DATABASE_HOST
  value: {{ .Values.mysql.auth.host }}  
{{- end }}
- name: DATABASE_TYPE
  value: "mysql"
- name: DATABASE_PORT
  value: {{ .Values.mysql.service.port | quote }}  
- name: DATABASE_USERNAME
  value: {{ .Values.mysql.auth.username }}  
- name: DATABASE_PASSWORD
  value: {{ .Values.mysql.auth.password }}  
- name: DATABASE_DATABASE
  value: {{ .Values.mysql.auth.database }}  
{{- end -}}



# 环境变量默认是development环境用于独立调试，最终运行环境是需要根据最外层 runtime 的全局变量来决定
{{- define "node-env" -}}
- name: NODE_ENV
  value: {{ default "development" .Values.global.nodeEnv }}
{{- end -}}  