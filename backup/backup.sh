#!/bin/bash

TIMESTAMP=$(date +%Y-%m-%d-%H-%M-%S)
BACKUP_FILE="${DB_NAME}-${TIMESTAMP}.tar.gz"

pg_dump -h "${DB_HOST}" -U "${DB_USER}" "${DB_NAME}" | gzip >"${BACKUP_FILE}"
aws s3 cp "${BACKUP_FILE}" "s3://${S3_BUCKET}/backups-db/${BACKUP_FILE}"
rm "${BACKUP_FILE}"
