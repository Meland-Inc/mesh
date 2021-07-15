#!/bin/bash

# 理论上不再需要 deploy.sh 脚本文件，因为服务不存在单个启动，服务的启动方式是根据父chart来串联编排启动
# 现在deploy.sh 存在的意义是方便调试单个服务而存在
# 

# 运行cmcli
set -o errexit
set -o nounset
set -o pipefail

tmp_dir=$(dirname $(dirname "${BASH_SOURCE}"))
cd "$tmp_dir"
PROJECT_ROOT=$(pwd)
RUN_ROOT=$(pwd)
DOCKER_NAMESPACE=${BELLCODE_DEPLOY_NAMESPACE:-"icw-registry.cn-shenzhen.cr.aliyuncs.com/icw"}
DEPLOY_IMAGE=${BELLCODE_DEPLOY_IMAGE:-"icw-registry.cn-shenzhen.cr.aliyuncs.com/icw/deploy:icw-20210706095103"}
PROJECT_NAME="user-service";

if ! [ -x "$(command -v docker)" ]; then
    echo 'ERROR: docker not found' >&2
    exit 1
fi


nodeenv=${1:-"development"}
appversion=${2:-""}


get_current_version() {
    git_revision=$(date +%Y%m%d%H%M%S)

    build_env=$(hostname)

    echo "${build_env}-${git_revision}"
}

get_docker_tag() {
    appname=${1:-""}
    version=${2:-""}
    echo "${DOCKER_NAMESPACE}/${appname}:${version}"
}

if ! [[ "${nodeenv}" =~ ^(development|pro)$ ]]; then
    echo -n "nodeenv: development|pro: "
    read -r nodeenv
fi

if ! [[ "${appversion}" ]]; then
    echo -n "appversion: "
    read -r appversion
fi


echo "deploy env: ${nodeenv}, deploy appversion: ${appversion}"

version=$(get_current_version)
image_name=$(get_docker_tag ${PROJECT_NAME} ${version})
docker build ${PROJECT_ROOT} -f ${PROJECT_ROOT}/docker/Dockerfile -t ${image_name}
docker push ${image_name}


docker run --rm -v${RUN_ROOT}/charts/${PROJECT_NAME}:${RUN_ROOT}/charts/${PROJECT_NAME} \
 ${DEPLOY_IMAGE} helm upgrade ${PROJECT_NAME}-${nodeenv}-${appversion} ${RUN_ROOT}/charts/${PROJECT_NAME} \
 --namespace="back-end" \
 --set mysql.primary.persistence.existingClaim=${PROJECT_NAME}-${nodeenv}-${appversion}-mysql \
 --set mysql.image.tag=${version} \
 --set image.tag="${version}" --install --wait
