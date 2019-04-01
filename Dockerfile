FROM node:10

COPY ./bin/ /bin/
RUN cd /bin && npm ci

ENTRYPOINT ["bin/eslint"]
CMD ["/bin/bash"]
