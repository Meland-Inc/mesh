#!/bin/bash

# 运行cmcli
set -o errexit
set -o nounset
set -o pipefail

tmp_dir=$(dirname $(dirname "${BASH_SOURCE}"))
cd "$tmp_dir"
PROJECT_ROOT=$(pwd)
RUN_ROOT=/$(pwd)
DOCKER_NAMESPACE=${BELLCODE_DEPLOY_NAMESPACE:-"icw-registry.cn-shenzhen.cr.aliyuncs.com/icw"}
DEPLOY_IMAGE=${BELLCODE_DEPLOY_IMAGE:-"icw-registry.cn-shenzhen.cr.aliyuncs.com/icw/deploy:icw-20210706095103"}
PROJECT_NAME="mesh";

if ! [ -x "$(command -v docker)" ]; then
    echo 'ERROR: docker not found' >&2
    exit 1
fi

# login icw aliyun docker image cloud
docker login -u tengyu067 -p zJEqgDq7c2JfG2yA icw-registry.cn-shenzhen.cr.aliyuncs.com



get_current_version() {
    git_revision=$(git rev-parse --short HEAD)
    echo ${git_revision}
}

get_docker_tag() {
    appname=${1:-""}
    version=${2:-""}
    echo "${DOCKER_NAMESPACE}/${appname}:${version}"
}

echo "building ${PROJECT_NAME} with docker ..."

version=$(get_current_version)
image_name=$(get_docker_tag ${PROJECT_NAME} ${version})


# build 服务镜像
# docker build ${PROJECT_ROOT} -f ${PROJECT_ROOT}/docker/Dockerfile -t ${image_name}
# docker push ${image_name}

# push chart
helm repo add --force-update  ${PROJECT_NAME} acr://icw-chart.cn-shenzhen.cr.aliyuncs.com/icw/mesh --username tengyu067 --password zJEqgDq7c2JfG2yA
helm push -f $PROJECT_ROOT/charts/mesh mesh